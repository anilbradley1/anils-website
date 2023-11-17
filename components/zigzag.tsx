import Image from 'next/image'



export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4"></div>
            <h1 className="h2 mb-4">Past Projects</h1>
            <p className="text-xl text-gray-400">Past projects to showcase my programming skills</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3">Neural Network</h3>
                  <p className="text-xl text-gray-400 mb-4"> Mathematically modeled and constructed a neural network in Python to classify images of handwritten numbers with the PyTorch library</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
  <circle cx="6" cy="6" r="5" stroke="none" />
</svg>
                      <span>Cleaned, shaped and inputted data into self implemented rectified linear unit and softmax functions to build a neural network</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
  <circle cx="6" cy="6" r="5" stroke="none" />
</svg>
                      <span>Trained and optimized the network using cross‐entropy calculations to minimize loss functions</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3">Unity 3-D Platformer</h3>
                  <p className="text-xl text-gray-400 mb-4">Implemented a platformer game with three dimensional camera and player movement in an interactive enviornment</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
  <circle cx="6" cy="6" r="5" stroke="none" />
</svg>
                      <span>Implemented in C# to allow smooth user movement and jumping mechanics</span>
                    </li>
                    <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
  <circle cx="6" cy="6" r="5" stroke="none" />
</svg>
                      <span>Utilizied spherical linear interpolation to maintain correct camera FOV and POV</span>
                    </li>
                    <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="6" r="5" stroke="none" />
                    </svg>
                      <span>Programmed in physics libaries to maintain correct and realistic player movement </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-15 lg:col-span-6" data-aos="fade-left">
                <div className="md:pr-6 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-12">This Website!</h3>
                  <p className="text-xl text-gray-400 mb-4">Created and modified existing components from open source software to build and deploy this website to showcase my skillset</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
