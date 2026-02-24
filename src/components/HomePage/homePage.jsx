import contentArray from "../contentArray";
import './homePage.css';
import { Route } from 'react-router-dom'

const HomePage = () => {
    return (
      <div className="bg-gray-800 py-10 my-2 mx-[10vw] rounded-lg shadow-lg">
        <div className="max-w-5xl mx-auto px-8">
                <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4 mb-4">
                  <img src="../beholder.ico" className="w-13 h-13" alt="Beholder Icon"></img>
                  <h1 className="text-5xl font-bold text-bs-secondary-600 [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Beholder</h1>
                </div>
                <p className="text-xl text-gray-300 mb-2">Your Comprehensive Security & Documentation Guide</p>
                </div>

                {/* What is Beholder Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-white mb-4">What is Beholder?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Beholder is a comprehensive documentation and security reference system designed to help internal teams understand 
              and navigate Lightspeed's complex structure. It provides detailed information about security permissions, 
              module functionality, and access requirements across all aspects of the system.
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-white mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-bs-secondary-300 mb-3">🔐 Security Documentation</h3>
                <p className="text-gray-300">
                  Detailed security permission requirements for every function, helping internal teams 
                  understand exactly what access rights are needed for each operation.
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-bs-secondary-300 mb-3">📚 Module Navigation</h3>
                <p className="text-gray-300">
                  Browse through all system modules including Parts, Service, Sales, Rental, and more. 
                  Each module contains organized sections and subsections for easy reference.
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-bs-secondary-300 mb-3">📖 Knowledgebase Articles</h3>
                <p className="text-gray-300">
                  References to detailed knowledgebase articles for in-depth information about 
                  specific features and functionality.
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-bs-secondary-300 mb-3">📝 Contextual Notes</h3>
                <p className="text-gray-300">
                  Additional notes and important information about specific functions, caveats, 
                  and special considerations for different operations.
                </p>
              </div>
            </div>
          </div>

          {/* Modules Overview */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-white mb-4">Available Modules</h2>
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-gray-300">
                {contentArray.filter(item => item.module !== 'Home').map((item, index) => {
                  const sectionCount = item.sections ? item.sections.length : 0;
                  const subsectionCount = item.sections ? 
                    item.sections.reduce((total, section) => 
                      total + (section.subsections ? section.subsections.length : 0), 0
                    ) : 0;
                  
                  return (
                    <a key={index} href={`/${item.module}`} className="rounded-lg bg-gray-600 p-4 mx-2.5 my-2 hover:bg-gray-900 transition-colors duration-300">
                      <div className="rounded-lg flex items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white">{item.module}</h3>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-white mb-4">Getting Started</h2>
            <div className="bg-gray-700 p-6 rounded-lg">
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Use the navigation bar above to select a module you want to explore</li>
                <li>Browse through sections and subsections to find the specific function you need</li>
                <li>Review security requirements to understand necessary permissions</li>
                <li>Click on knowledge base article links for detailed documentation</li>
                <li>Reference additional notes for important caveats and special information</li>
              </ol>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-600">
            <p className="text-gray-400 text-sm">
                © 2025 Connor Walker and Caleb Jones, all rights reserved
            </p>
          </div>
        </div>
      </div>
    );
}

export default HomePage;