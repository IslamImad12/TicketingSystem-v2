import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  pass: z.string().min(6, "Password must be at least 6 characters"),
  confirmPass: z.string().min(6, "Confirm Password must be at least 6 characters"),
}).refine((data) => data.pass === data.confirmPass, {
  message: "Passwords must match",
  path: ["confirmPass"],
});

export default function SignOut() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      pass: "",
      confirmPass: "",
    },
  });

  function save(data) {
    console.log("Form Submitted:", data);
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="flex w-full h-full bg-white shadow-lg overflow-hidden">

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-3 mt-20">Create Account</h2>
            <p className="text-sm text-center">With Ticketing System dashboard you can track <br /> analytics for how is your business doing in our platform  </p>
            <form onSubmit={handleSubmit(save)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.name && <small className="text-red-500">{errors.name.message}</small>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.email && <small className="text-red-500">{errors.email.message}</small>}
              </div>

              <div>
                <label htmlFor="pass" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  {...register("pass")}
                  id="pass"
                  type="password"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.pass && <small className="text-red-500">{errors.pass.message}</small>}
              </div>

              <div>
                <label htmlFor="confirmPass" className="block text-sm font-medium text-gray-600">
                  Confirm Password
                </label>
                <input
                  {...register("confirmPass")}
                  id="confirmPass"
                  type="password"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.confirmPass && <small className="text-red-500">{errors.confirmPass.message}</small>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Left Side - Image */}
        <div className="w-1/2 md:block" style={{ backgroundColor: "#03091E" }}>
          <div className="text-white flex flex-col items-center justify-center h-full p-12 text-center">
            <h1 className="text-3xl font-bold mb-4">Hello Friend!</h1>
            <p className="text-lg">To keep connected with us please <br /> sign in with your personal info</p>
          </div>
        </div>

      </div>
    </div>
  );
}
