import Image from "next/image";

export function MasonryGridGallery({ data }: { data: string[] }) {
  return (
    <div className="gap-4 hidden xl:grid grid-cols-2 lg:grid-cols-4 lg:py-20">
      <div className="gap-4 grid">
        <div>
          <Image
            className="rounded-lg max-w-full h-[16em] object-cover object-center"
            src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="gallery-photo"
            width={1950}
            height={1300}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[40em] object-cover object-center"
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="gallery-photo"
            width={927}
            height={618}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[15em] object-cover object-center"
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="gallery-photo"
            width={2940}
            height={1960}
          />
        </div>
      </div>
      <div className="gap-4 grid">
        <div>
          <Image
            className="rounded-lg max-w-full h-[33em] object-cover object-center"
            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="gallery-photo"
            width={687}
            height={458}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[19em] object-cover object-center"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="gallery-photo"
            width={800}
            height={533}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[19em] object-cover object-center"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="gallery-photo"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="gap-4 grid">
        <div>
          <Image
            className="rounded-lg max-w-full h-[22em] object-cover object-center"
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="gallery-photo"
            width={2940}
            height={1960}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[16em] object-cover object-center"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="gallery-photo"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[33em] object-cover object-center"
            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="gallery-photo"
            width={687}
            height={458}
          />
        </div>
      </div>
      <div className="gap-4 grid">
        <div>
          <Image
            className="rounded-lg max-w-full h-[31em] object-cover object-center"
            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="gallery-photo"
            width={687}
            height={458}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[30em] object-cover object-center"
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="gallery-photo"
            width={927}
            height={618}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[10em] object-cover object-center"
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="gallery-photo"
            width={927}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
