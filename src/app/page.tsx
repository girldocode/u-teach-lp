import Image from "next/image";

export default function Page() {
  return (
    <div className="display-grid grid-cols-2 gap-4 position-relative">
      <div className="">
        <h1 className="bg-url navbar-inverse fw-bold spacing-tighter clamp-6 align-right decor-underline transform-uppercase font-serif font-white mt-10 mb-8 px-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ipsa
          suscipit sapiente qui, illo voluptas accusamus repellendus maxime ad
          perferendis, voluptatem temporibus, saepe repellat unde? Veritatis
          architecto laboriosam libero et!
        </h1>
      </div>

      <div className="border-8 border-solid border-purple-800 border-lg ">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          vel vitae, soluta mollitia rerum recusandae ratione architecto dolore,
          non reprehenderit nemo facilis sint modi debitis cum repudiandae
          commodi ducimus laborum.
        </p>
      </div>

      <div className="">
        <button className="px-4 py-4 min-w-8 min-h-10 max-w-20 max-h-20 w-32 h-20">
          Click me !!
        </button>
      </div>

      <div className="position-absolute top-0 left-0">
        <Image
          src="/matt-mutlu-dvGmHwCXlDU-unsplash.jpg"
          alt="im"
          width={200}
          height={200}
        />
      </div>
      <div className="  box-shadow-2xl shadow-color-orange-400">
        <h1>hello how are you?</h1>
      </div>
    </div>
  );
}
