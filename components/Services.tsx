'use client'

const services = [
  {
    title: 'STRATEGY',
    description: 'Defining clear direction and long-term value.',
    icon: '🧭'
  },
  {
    title: 'LEADERSHIP',
    description: 'Aligning teams and empowering leaders.',
    icon: '👥'
  },
  {
    title: 'GROWTH',
    description: 'Identifying opportunities and accelerating results.',
    icon: '📊'
  },
  {
    title: 'RISK MANAGEMENT',
    description: 'Anticipating challenges and building resilience.',
    icon: '🛡️'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-cascadia-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{service.description}</p>
              <a href="#" className="text-cascadia-green font-semibold text-sm hover:underline">
                LEARN MORE →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
