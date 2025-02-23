import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function LandingPage() {
  return (
    <>
      {/* القسم الرئيسي مع الخلفية */}
      <div className="relative bg-primary text-white py-5 pb-24 min-h-screen flex justify-center items-center bg-[radial-gradient(circle,_#081D66,_#03091E)]">
        {/* صورة الباترن */}
        {/* <img 
          src="/pattern.jpg" 
          alt="Pattern Background" 
          className="absolute top-0 left-0 w-full h-48 opacity-10 object-cover" 
        /> */}

        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mt-24">
            Make your working process easier <br /> with Your Ticket
          </h1>
          <p className="text-lg mt-4">
            Its much easier now to create, assign, manage, and resolve <br />
            tickets with Your Ticket. Just host this web <br />
            application on any hosting server of your choice and use it.
          </p>

          {/* أزرار التنقل */}
          <div className="mt-6 flex justify-center space-x-4">
            <Link className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300" to="/login">
              Login
            </Link>
            <Link className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md transition duration-300" to="/register">
            Register
            </Link>
          </div>
        </div>
      </div>

      {/* صورة متداخلة بين القسمين */}
      <div className="relative flex justify-center ">
        <img src="../../../public/images/dash.png" className="w-1/2 mx-auto absolute -top-40 shadow-lg rounded-lg" alt="Dashboard" />
      </div>

      {/* قسم العمليات */}
      <div className="pt-80 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mt-4">Looking For Help?</h2>
          <p className="text-gray-600 mt-2">Here is an example of our services.</p>

          {/* بطاقات العمليات */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 py-8">
            {[
              { icon: 'fa-ticket', title: 'Submit A Ticket', color: 'text-blue-500', description: 'You can submit a ticket from this home page or dashboard after login. If you don’t have an account, you can create one from this link.' },
              { icon: 'fa-message', title: 'Instant Talk with Agent', color: 'text-green-500', description: 'You can discuss with agent directly if your ticket is being delay to get respond.' },
              { icon: 'fa-envelope', title: 'Instant talk with agent', color: 'text-yellow-500', description: 'You will notified when change ticket status or you can comment and discuss with agent for a particular ticket.' },
              { icon: 'fa-check', title: 'Done and Close the Ticket', color: 'text-red-500', description: 'After making done a ticket agent will close the ticket though status, you may get notify when close.' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <i className={`fa-solid ${item.icon} text-4xl ${item.color}`}></i>
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
