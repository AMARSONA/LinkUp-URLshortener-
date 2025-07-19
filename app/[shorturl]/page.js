import { redirect } from 'next/navigation';
import connectDB from '@/lib/mongodb'; // this is now using mongoose
import Url from '@/models/URL';

export default async function Page({ params }) {
  const { shorturl } = params;

  await connectDB(); // Connect to MongoDB via Mongoose

  const doc = await Url.findOne({ shorturl });

  if (doc) {
    redirect(doc.url); // Redirect to original long URL
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`); // Redirect to homepage or fallback
  }
}
