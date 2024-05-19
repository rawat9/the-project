import { UploadCloud, Share2, LineChart, LayoutPanelTop } from 'lucide-react'

const features = [
  {
    name: 'CV to Portfolio',
    description:
      'Transform your CV into a captivating portfolio that beautifully showcases your skills and experiences.',
    icon: UploadCloud,
  },
  {
    name: 'Seamless Sharing',
    description:
      'Easily share your portfolio with recruiters and your professional community, making it effortless to present your work and achievements.',
    icon: Share2,
  },
  {
    name: 'Performance Insights',
    description:
      'Gain insights into your portfolios performance with web analytics, allowing you to track visitor engagement and optimize your online presence effectively.',
    icon: LineChart,
  },
  {
    name: 'Customizable Templates',
    description:
      'Choose from a diverse range of customizable templates to personalize your portfolio and make it uniquely yours, reflecting your style and personality effortlessly.', 
    icon: LayoutPanelTop,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unlock Your Potential with Effortless Portfolio Creation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Expose, we believe everyone deserves a stunning portfolio to showcase their skills and talents. Our platform offers a seamless solution for individuals and professionals alike to create impressive portfolios in minutes, without any technical expertise required.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
