import 'server-only';
import { createClient } from '@supabase/supabase-js';
const bucket = 'project-bnb';
export const uploadImage = async (image: File) => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;
  if (!url || !key) throw new Error('Image storage is unavailable. Please try again later.');
  const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  const newName = `${crypto.randomUUID()}-${image.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
  const { data, error } = await supabase.storage.from(bucket).upload(newName, image, { cacheControl: '3600' });
  if (error || !data) throw new Error('Image upload failed. Please try again.');
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
