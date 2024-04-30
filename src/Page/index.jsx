import React from "react";
import Heading from "../components/Heading";
import Lane from "../components/Lane";

const Page = () => {
  return (
    <div className="w-full h-dvh px-12 py-12 flex flex-col gap-6">
      <Heading
        title="Design weekly"
        caption="A board to keep track of design progress."
      ></Heading>
      <div className="w-full h-full bg-slate-100 rounded-lg p-3 flex flex-be overflow-x-auto">
        <Lane
          nama="Last Week"
          warna="bg-blue-200"
          cards={[
            {
              title: "Review Scope",
              desc: "Review #390.",
              tags: [{ text: "Due 4/11s", color: "bg-pink-200" }],
            },
            {
              title: "Team Retro",
              tasks: [
                { task: "Apaan nih", initialState: true },
                { task: "Task kedua saya", initialState: false },
              ],
            },
          ]}
        />
        <Lane
          nama="This Week"
          warna="bg-gray-200"
          cards={[
            {
              title: "Usability Test Nih",
              desc: "Research questions with Carina.",
              avatarIds: [3, 2],
              tags: [{ text: "Research", color: "bg-green-200" }],
            },
            {
              title: "Team UX",
              tasks: [
                { task: "User Persona", initialState: false },
                { task: "Research plan", initialState: true },
              ],
            },
          ]}
        />
        <Lane
          nama="Next Week"
          warna="bg-purple-200"
          cards={[
            {
              title: "Culture Workshop",
              desc: "Research questions with Carina.",
              avatarIds: [2],
              tasks: [
                { task: "Schedule time", initialState: true },
                { task: "Set up a Figma board", initialState: false },
                { task: "Review exercises with the team", initialState: false },
              ],
              tags: [
                { text: "Research", color: "bg-red-100" },
                { text: "UX", color: "bg-blue-100" },
              ],
            },
          ]}
        />
        <Lane
          nama="Finish"
          warna="bg-green-200"
          cards={[
            {
              title: "Culture Workshop",
              desc: "Deskripsinya cukup panjang jadi singkat aja hahahaha.",
              avatarIds: [2, 4, 5, 6],
              tasks: [
                { task: "Finish the task", initialState: true },
                { task: "Review", initialState: true },
                { task: "Accountant contract", initialState: false },
              ],
              tags: [
                { text: "Yey", color: "bg-gray-100" },
                { text: "Urgent", color: "bg-green-100" },
                { text: "Tag", color: "bg-yellow-100" },
                { text: "Tag", color: "bg-yellow-100" },
                { text: "Tag", color: "bg-yellow-100" },
                { text: "Due 2025", color: "bg-green-100" },
                { text: "Due 2025", color: "bg-red-100" },
                { text: "Due 2025", color: "bg-green-100" },
                { text: "Due 2025", color: "bg-green-100" },
              ],
            },
            {
              title: "Team UI",
              avatarIds: [3],
              tasks: [
                { task: "Design System", initialState: true },
                { task: "Landing Page", initialState: true },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Page;
