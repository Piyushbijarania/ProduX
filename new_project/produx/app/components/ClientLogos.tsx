const clientLogos = [
  'Group 98952', 'mimo-1', 'Group 98954', 'Group 1387', 'Group 98779', 
  'netacent', 'red', 'balsam', 'Layer_1', 'IdahoStars'
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500">
            Trusted by Leading Companies
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 opacity-50">
          {clientLogos.map((logo, i) => (
            <div 
              key={i} 
              className="h-16 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200"
            >
              <span className="text-gray-500 text-xs font-medium">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
