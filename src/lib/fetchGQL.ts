import { print, DocumentNode } from "graphql";

type GraphQLResponse<T> = { data: T };

export async function fetchGQL<T>(
  query: string | DocumentNode,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const tokenRes = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API}/wp-json/jwt-auth/v1/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        username: process.env.JWT_USER!,
        password: process.env.JWT_PASS!,
      }),
      next: { revalidate: 60 },
    }
  ).then((r) => r.json() as Promise<{ token: string }>);

  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenRes.token}`,
    },
    body: JSON.stringify({
      query: typeof query === "string" ? query : print(query),
      variables,
    }),
    next: { revalidate: 300 },
  }).then((r) => r.json() as Promise<GraphQLResponse<T>>);

  return res.data;
}
