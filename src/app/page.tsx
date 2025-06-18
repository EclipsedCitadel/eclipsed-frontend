import { fetchGQL } from "@/lib/fetchGQL";

type Post = { id: string; title: string };

export default async function Home() {
  const { posts } = await fetchGQL<{ posts: { nodes: Post[] } }>(`
    query Home {
      posts(first: 1) {
        nodes { id title }
      }
    }
  `);

  const post = posts.nodes[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4">Eclipsed Citadel</h1>
        <p className="text-lg text-gray-600 mb-8">
          AI-powered marketing & creative studio for growing SMBs.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-2xl bg-black px-6 py-3 text-white font-medium hover:opacity-90 transition"
        >
          Book a discovery call
        </a>
      </section>

      {post && (
        <section className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-3">Latest insight</h2>
          <p className="text-xl">{post.title}</p>
        </section>
      )}
    </main>
  );
}
