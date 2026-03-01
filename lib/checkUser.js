import { createClient } from './supabase/server';
import { db } from './prisma';

export const checkUser = async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  try {
    const existing = await db.user.findUnique({ where: { authUserId: user.id } });
    if (existing) return existing;

    return await db.user.create({
      data: {
        authUserId: user.id,
        email: user.email,
        name: user.user_metadata?.full_name ?? user.email.split('@')[0],
        imageUrl: user.user_metadata?.avatar_url ?? null,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};
