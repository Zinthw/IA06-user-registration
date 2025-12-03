import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type FormValues = { email: string; password: string };

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await axios.post(`${API_BASE}/user/register`, data);
      return res.data;
    },
  });

  const onSubmit = (data: FormValues) => mutation.mutate(data);

  return (
    <div className="max-w-md">
      <h1 className="text-xl font-semibold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            placeholder="you@example.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input
            type="password"
            className="w-full border p-2 rounded"
            placeholder="••••••"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" },
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
        >
          {mutation.isPending ? "Signing up..." : "Create Account"}
        </button>

        {mutation.isSuccess && (
          <p className="text-green-600">Account created successfully.</p>
        )}
        {mutation.isError && (
          <p className="text-red-600">
            {(mutation.error as any)?.response?.data?.message ||
              "Something went wrong"}
          </p>
        )}
      </form>
    </div>
  );
}
