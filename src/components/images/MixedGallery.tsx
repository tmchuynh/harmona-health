import Image from "next/image";

export default function MixedGallery() {
  return (
    <div className="lg:block hidden mx-auto py-2">
      <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-1/2">
          <div className="p-1 md:p-2 w-1/2">
            <Image
              alt=""
              className="block rounded-lg w-full h-full object-cover object-center"
              src="https://img.freepik.com/premium-photo/concept-using-data-analysis-systems-with-artificial-intelligence_150418-2110.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              width={500}
              height={500}
            />
          </div>
          <div className="p-1 md:p-2 w-1/2">
            <Image
              alt=""
              className="block rounded-lg w-full h-full object-cover object-center"
              src="https://img.freepik.com/premium-photo/martech-marketing-technology-concept-virtual-screen-interface-network-connection-online-market_1101054-70301.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              width={500}
              height={500}
            />
          </div>
          <div className="p-1 md:p-2 w-full">
            <Image
              alt=""
              className="block rounded-lg w-full h-full object-cover object-center"
              src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010144.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              width={1000}
              height={500}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="p-1 md:p-2 w-full">
            <Image
              alt=""
              className="block rounded-lg w-full h-full object-cover object-center"
              src="https://img.freepik.com/premium-photo/screen-with-word-blue-it_1239820-2062.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              width={1000}
              height={500}
            />
          </div>
          <div className="p-1 md:p-2 w-1/2">
            <Image
              alt=""
              className="block rounded-lg w-full h-full object-cover object-center"
              src="https://img.freepik.com/premium-photo/big-data-technology-business-finance-concept_31965-3079.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              width={500}
              height={500}
            />
          </div>
          <div className="p-1 md:p-2 w-1/2">
            <Image
              alt=""
              className="block rounded-lg w-full h-full object-cover object-center"
              src="https://img.freepik.com/premium-photo/two-asian-businessmen-analysts-modern-office-reviewing-financial-statements-business-performance-analysing-return-investment-roi_101984-115.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
