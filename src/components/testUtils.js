const mockResponse = {
  results: [
    {
      backdrop_path: "/3PieOs1t6dPHWlgvX3XoqTIQLqN.jpg",
      genre_ids: [12, 28, 878],
      id: 507086,
      original_language: "en",
      original_title: "Jurassic World Dominion",
      overview:
        "Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood, while Dr Ellie Sattler investigates a genetically engineered swarm of giant insects.",
      popularity: 601.656,
      poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      release_date: "2022-06-01",
      title: "Jurassic World Dominion",
      video: false,
      vote_average: 7,
      vote_count: 3880,
    },
    {
      backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 628.464,
      poster_path: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      video: false,
      vote_average: 8,
      vote_count: 15895,
    },
    {
      backdrop_path: "/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg",
      genre_ids: [14, 28, 18],
      id: 779782,
      original_language: "en",
      original_title: "The School for Good and Evil",
      overview:
        "Best friends Sophie and Agatha navigate an enchanted school for young heroes and villains — and find themselves on opposing sides of the battle between good and evil.",
      popularity: 616.928,
      poster_path: "/6oZeEu1GDILdwezmZ5e2xWISf1C.jpg",
      release_date: "2022-10-19",
      title: "The School for Good and Evil",
      video: false,
      vote_average: 7.3,
      vote_count: 633,
    },
  ],
};

export async function mockFetch(url) {
  if (url.startsWith("https://api.themoviedb.org/") && url.includes("28")) {
    return {
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockResponse),
    };
  }

  throw new Error(`Unhandled request`);
}
