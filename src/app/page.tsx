import dots from "../../public/assets/images/dot-back.png";

export default function Home() {
  return (
    <section className="px-5 lg2:px-10 ">
      <main className="relative bg-primary rounded-2xl h-max text-white py-24 px-36">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${dots.src})` }}
        />
        <div className="text-5xl">teste</div>
      </main>
    </section>
  );
}
