import {
  users,
  contacts,
  posts,
  type User,
  type UpsertUser,
  type Contact,
  type InsertContact,
  type Post,
  type InsertPost,
  type UpdatePost,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import { randomUUID } from "crypto";

// Interface for storage operations
export interface IStorage {
  // User operations (mandatory for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Contact operations
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Post operations
  createPost(post: InsertPost): Promise<Post>;
  updatePost(id: string, post: UpdatePost): Promise<Post>;
  deletePost(id: string): Promise<void>;
  getPost(id: string): Promise<Post | undefined>;
  getPosts(): Promise<Post[]>;
  getPublishedPosts(): Promise<Post[]>;
  getFeaturedPost(): Promise<Post | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User operations (mandatory for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Contact operations
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values({
        ...insertContact,
        message: insertContact.message || null,
      })
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db
      .select()
      .from(contacts)
      .orderBy(desc(contacts.createdAt));
  }

  // Post operations
  async createPost(insertPost: InsertPost): Promise<Post> {
    const [post] = await db
      .insert(posts)
      .values(insertPost)
      .returning();
    return post;
  }

  async updatePost(id: string, updatePost: UpdatePost): Promise<Post> {
    const [post] = await db
      .update(posts)
      .set({
        ...updatePost,
        updatedAt: new Date(),
      })
      .where(eq(posts.id, id))
      .returning();
    return post;
  }

  async deletePost(id: string): Promise<void> {
    await db.delete(posts).where(eq(posts.id, id));
  }

  async getPost(id: string): Promise<Post | undefined> {
    const [post] = await db.select().from(posts).where(eq(posts.id, id));
    return post;
  }

  async getPosts(): Promise<Post[]> {
    return await db
      .select()
      .from(posts)
      .orderBy(desc(posts.createdAt));
  }

  async getPublishedPosts(): Promise<Post[]> {
    return await db
      .select()
      .from(posts)
      .where(eq(posts.published, true))
      .orderBy(desc(posts.createdAt));
  }

  async getFeaturedPost(): Promise<Post | undefined> {
    const [post] = await db
      .select()
      .from(posts)
      .where(eq(posts.featured, true))
      .orderBy(desc(posts.createdAt))
      .limit(1);
    return post;
  }
}

// Fallback memory storage for development
export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private posts: Map<string, Post>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.posts = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const existingUser = this.users.get(userData.id!);
    const user: User = {
      ...userData,
      id: userData.id!,
      email: userData.email || null,
      firstName: userData.firstName || null,
      lastName: userData.lastName || null,
      profileImageUrl: userData.profileImageUrl || null,
      createdAt: existingUser?.createdAt || new Date(),
      updatedAt: new Date(),
    };
    this.users.set(user.id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      message: insertContact.message || null,
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const id = randomUUID();
    const post: Post = {
      title: insertPost.title || "",
      excerpt: insertPost.excerpt || "",
      content: insertPost.content || "",
      author: insertPost.author || "",
      category: insertPost.category || "",
      id,
      imageUrls: insertPost.imageUrls || [],
      featured: insertPost.featured || false,
      published: insertPost.published !== false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.posts.set(id, post);
    return post;
  }

  async updatePost(id: string, updatePost: UpdatePost): Promise<Post> {
    const existingPost = this.posts.get(id);
    if (!existingPost) {
      throw new Error("Post not found");
    }
    const post: Post = {
      ...existingPost,
      ...updatePost,
      updatedAt: new Date(),
    };
    this.posts.set(id, post);
    return post;
  }

  async deletePost(id: string): Promise<void> {
    this.posts.delete(id);
  }

  async getPost(id: string): Promise<Post | undefined> {
    return this.posts.get(id);
  }

  async getPosts(): Promise<Post[]> {
    return Array.from(this.posts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getPublishedPosts(): Promise<Post[]> {
    return Array.from(this.posts.values())
      .filter(post => post.published)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getFeaturedPost(): Promise<Post | undefined> {
    return Array.from(this.posts.values())
      .filter(post => post.featured && post.published)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0];
  }
}

// Use database storage in production, memory storage as fallback
export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
