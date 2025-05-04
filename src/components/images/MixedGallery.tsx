import Image from "next/image";

export default function MixedGallery({ data }: { data: string[] }) {
  return (
    <div className="lg:block hidden mx-auto py-2 md:py-6 lg:py-12">
      <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-1/2">
          <div className="p-1 md:p-2 w-1/2">
            <Image
              alt=""
              className="block rounded-lg w-full h-[20em] object-cover object-center"
              src={
                data[0] ||
                "https://img.freepik.com/free-photo/working-office_1150-108.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              }
              width={500}
              height={500}
            />
          </div>
          <div className="p-1 md:p-2 w-1/2">
            <Image
              alt=""
              className="block rounded-lg w-full h-[20em] object-cover object-center"
              src={
                data[1] ||
                "https://img.freepik.com/premium-photo/cropped-hand-woman-writing-book_1048944-30546488.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              }
              width={500}
              height={500}
            />
          </div>
          <div className="p-1 md:p-2 w-full">
            <Image
              alt=""
              className="block rounded-lg w-full h-[42em] object-cover object-center"
              src={
                data[2] ||
                "https://img.freepik.com/premium-photo/freelancer-yellow-shirt-making-notes-her-notebook_146259-248.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              }
              width={1000}
              height={500}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="p-1 md:p-2 w-full">
            <Image
              alt=""
              className="block rounded-lg w-full h-[30em] object-cover object-center"
              src={
                data[3] ||
                "https://img.freepik.com/free-photo/student-female-hands-performing-written-task-copybook_1163-2552.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              }
              width={1000}
              height={500}
            />
          </div>
          <div className="p-1 md:p-2 w-1/2">
            <Image
              alt=""
              className="block rounded-lg w-full h-[32em] object-cover object-center"
              src={
                data[4] ||
                "https://img.freepik.com/free-photo/elderly-woman-drinking-coffee-cafe-while-working-her-laptop-writing-her-notebook_23-2149230374.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              }
              width={500}
              height={500}
            />
          </div>
          <div className="p-1 md:p-2 w-1/2">
            <Image
              alt=""
              className="block rounded-lg w-full h-[32em] object-cover object-center"
              src={
                data[5] ||
                "https://img.freepik.com/free-photo/medium-shot-woman-writing-her-journal_23-2150416389.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              }
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
