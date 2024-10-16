"use client";

import { api } from "~/trpc/react";

export function Soal() {
  const [soal] = api.question.getOneQuestion.useSuspenseQuery();

  return (
    <div className="w-full max-w-xs border">
      {soal ? (
        <p className="truncate">
          content: {soal.content} <br />
          score: {soal.score}{" "}
        </p>
      ) : (
        <p>You have no soals yet.</p>
      )}
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form> */}
    </div>
  );
}
