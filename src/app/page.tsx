<main className="flex min-h-screen flex-col items-center justify-center bg-[#2B2F4A] text-[#F5F5F5] text-center p-8">
  <Image
    src="/logo.png"
    alt="Eclipsed Citadel Logo"
    width={1024}
    height={1024}
  />

  {post && (
    <section className="mt-20 text-center">
      <h2 className="text-2xl font-bold mb-3">Latest insight</h2>
      <p className="text-xl">{post.title}</p>
    </section>
  )}
</main>
