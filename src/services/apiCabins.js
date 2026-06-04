import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) console.log(error.message);
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = typeof newCabin.image === "string";

  const imageName = hasImagePath
    ? null
    : `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // IMPORTANT:
  // remove image file object before insert/update
  const cabinData = {
    ...newCabin,
    image: imagePath,
  };

  let query = supabase.from("cabins");

  // CREATE
  if (!id) {
    query = query.insert([cabinData]);
  }

  // EDIT
  if (id) {
    query = query.update(cabinData).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // Upload image only if new file
  if (hasImagePath) return data;

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);

      console.error(storageError);
      throw new Error("Cabin image could not be uploaded");
    }
  }

  return data;
}
