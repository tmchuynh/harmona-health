import Image from "next/image";

export function MasonryGridGallery({ data }: { data: string[] }) {
  return (
    <div className="gap-4 hidden xl:grid grid-cols-2 lg:grid-cols-4 lg:py-20">
      <div className="gap-4 grid">
        <div>
          <Image
            className="rounded-lg max-w-full h-[16em] object-cover object-center"
            src={
              data[0] ||
              "https://img.freepik.com/free-photo/elderly-woman-drinking-coffee-cafe-while-working-her-laptop-writing-her-notebook_23-2149230374.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
            alt="gallery-photo"
            width={1950}
            height={1300}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[40em] object-cover object-center"
            src={
              data[1] ||
              "https://img.freepik.com/free-photo/close-up-hand-writing-notebook_23-2148877761.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
            alt="gallery-photo"
            width={927}
            height={618}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[15em] object-cover object-center"
            src={
              data[2] ||
              "https://img.freepik.com/free-photo/caucasian-woman-writing-letter_53876-47106.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
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
            src={
              data[3] ||
              "https://img.freepik.com/premium-photo/coffee-shop-cafe-drinking-friendship-togetherness-concept_53876-54879.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
            alt="gallery-photo"
            width={687}
            height={458}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[19em] object-cover object-center"
            src={
              data[4] ||
              "https://img.freepik.com/premium-photo/cropped-hand-woman-writing-with-pen-paper-home_1048944-25455010.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
            alt="gallery-photo"
            width={800}
            height={533}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[19em] object-cover object-center"
            src={
              data[5] ||
              "https://img.freepik.com/free-photo/unrecognisable-man-writing-notebook_23-2148422490.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
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
            src={
              data[6] ||
              "https://img.freepik.com/free-photo/unrecognizable-businesswoman-working-office-writing-business-plans-her-notebook_637285-89.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
            alt="gallery-photo"
            width={2940}
            height={1960}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[16em] object-cover object-center"
            src={
              data[7] ||
              "https://img.freepik.com/premium-photo/young-woman-works-laptop-takes-notes-notebook_182615-426.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
            alt="gallery-photo"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[33em] object-cover object-center"
            src={
              data[8] ||
              "https://img.freepik.com/free-photo/vertical-selective-closeup-female-writing-notebook-with-blue-pen_181624-3170.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
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
            src={
              data[9] ||
              "https://img.freepik.com/premium-photo/flatlay-women-s-hands-writing-notebook-sheet-comfortable-home-office-workspace-interior-design_408798-8573.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
            alt="gallery-photo"
            width={687}
            height={458}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[30em] object-cover object-center"
            src={
              data[10] ||
              "https://img.freepik.com/free-photo/top-view-adult-correcting-grammar-mistakes_23-2150171388.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
            alt="gallery-photo"
            width={927}
            height={618}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-[10em] object-cover object-center"
            src={
              data[11] ||
              "https://img.freepik.com/premium-photo/midsection-woman-working-desk_1048944-11352480.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            }
            alt="gallery-photo"
            width={927}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
