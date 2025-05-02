const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and polycarbonate add-ons.' },
  { name: 'Dimensions', description: '15" x 3.75" x .75"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          alt=""
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-02-full-width.jpg"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 max-w-7xl">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <h2 className="font-bold text-3xl text-gray-900 sm:text-4xl tracking-tight">Technical Specifications</h2>
          <p className="mt-4 text-gray-500">
            Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you
            meticulously arrange items into dedicated trays.
          </p>
        </div>

        <dl className="gap-x-6 gap-y-10 sm:gap-y-16 lg:gap-x-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto mt-16 max-w-2xl lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="pt-4 border-gray-200 border-t">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-gray-500 text-sm">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
