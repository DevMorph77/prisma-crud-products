"use server";
import { prisma } from "@/lib/db";
import { redirect } from 'next/navigation'

// Create Product
export async function createPost(formData: FormData): Promise<void> {
  const productname = formData.get("name");
  const productdescription = formData.get("description");
  const productprice = formData.get("price");
  const imageUrl = formData.get("imageUrl");

  if (
    typeof productname !== "string" ||
    typeof productdescription !== "string" ||
    typeof productprice !== "string" ||
    typeof imageUrl !== "string"
  ) {
    throw new Error("Invalid form data");
  }

  await prisma.product.create({
    data: {
      name: productname,
      description: productdescription,
      price: Number(productprice),
      imageUrl: imageUrl,
    },
  });
}

// Edit Product
export async function editPost(formData: FormData): Promise<void> {
  const productId = formData.get("id");
  const productname = formData.get("name");
  const productdescription = formData.get("description");
  const productprice = formData.get("price");
  const imageUrl = formData.get("imageUrl");

  if (
    typeof productId !== "string" ||
    typeof productname !== "string" ||
    typeof productdescription !== "string" ||
    typeof productprice !== "string" ||
    typeof imageUrl !== "string"
  ) {
    throw new Error("Invalid form data");
  }

  await prisma.product.update({
    where: { id: Number(productId) },
    data: {
      name: productname,
      description: productdescription,
      price: Number(productprice),
      imageUrl: imageUrl,
    },
  });
}


export async function deletePost(formData: FormData): Promise<void> {
    const id = formData.get("id");
  
    if (typeof id !== "string") {
      throw new Error("Invalid form data");
    }
  
    await prisma.product.delete({
      where: { id: parseInt(id) },
    });
  
    // Redirect to the products page after deletion
    redirect("/products");
  }
