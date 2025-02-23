// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
// import logo from '../../images/logo.png'
// import admin from '../../images/admin4.png'

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
});

export default function ProfileUpdate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const [photo, setPhoto] = useState(null);

  function save(data) {
    console.log("Updated Data:", { ...data, photo });
  }

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  }

  return ( <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Update Profile</h2>
        <form onSubmit={handleSubmit(save)} className="space-y-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
            <input 
              {...register("firstName")} 
              id="firstName" 
              type="text" 
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            />
            {errors.firstName && <small className="text-red-500">{errors.firstName.message}</small>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
            <input 
              {...register("lastName")} 
              id="lastName" 
              type="text" 
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            />
            {errors.lastName && <small className="text-red-500">{errors.lastName.message}</small>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input 
              {...register("email")} 
              id="email" 
              type="email" 
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            />
            {errors.email && <small className="text-red-500">{errors.email.message}</small>}
          </div>

          {/* Photo Upload */}
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-600">Profile Photo</label>
            <input 
              id="photo" 
              type="file" 
              accept="image/*" 
              onChange={handlePhotoChange} 
              className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {photo && <img src={photo} alt="Preview" className="mt-2 w-20 h-20 rounded-full border shadow-lg" />}
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  </>
  );
}