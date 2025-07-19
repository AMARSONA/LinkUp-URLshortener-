//

import connectDB from "@/lib/mongodb";
import Url from "@/models/URL";

export async function POST(request) {
  try {
    const body = await request.json();
    const { url, shorturl } = body;

    await connectDB();

    // Check if short URL already exists
    const existing = await Url.findOne({ shorturl });
    if (existing) {
      return Response.json({
        success: false,
        error: true,
        message: "Short URL already exists",
      });
    }

    //Check if the short url exists
//     const doc=await collection.findOne({shorturl:body.shorturl})
//     if(doc)
//     {
//       return Response.json({success:false,error:true, message: 'URL already exists'})
//     }


    // Create new short URL entry
    await Url.create({ url, shorturl });

    return Response.json({
      success: true,
      error: false,
      message: "URL generated successfully",
    });
  } catch (error) {
    console.error("POST /api/shorten error:", error);
    return Response.json(
      {
        success: false,
        error: true,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}


// import clientPromise from "@/lib/mongodb";
// export async function POST(request) {

//     const body=await request.json()
//     const client=await clientPromise;
//     const db=client.db("LinkUp")
//     const collection=db.collection("url")


//     //Check if the short url exists
//     const doc=await collection.findOne({shorturl:body.shorturl})
//     if(doc)
//     {
//       return Response.json({success:false,error:true, message: 'URL already exists'})
//     }




//     const result =await collection.insertOne({
//         url:body.url,
//         shorturl:body.shorturl
//     })
    


//   return Response.json({success:true,error:false, message: 'URL generated successfully' })
// }