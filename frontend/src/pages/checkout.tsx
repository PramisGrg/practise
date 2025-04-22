import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/ui/input";
import { useCartStore } from "../store/cart-state";
import { checkoutSchema, TcheckoutSchema } from "../schema/checkout.schema";
import { Label } from "../components/ui/label";

const Checkout = () => {
  const { totalPrice } = useCartStore();

  const form = useForm<TcheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data: TcheckoutSchema) => {
    console.log(data, "This is data");
  };

  return (
    <div>
      <h1>This is checktout</h1>
      <p>{totalPrice}</p>

      <div className="flex items-center justify-center h-screen w-[40%]">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              {...form.register("name")}
              className="w-full"
              placeholder="Enter your name"
            />
            {form.formState.errors.name && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="date">Password</Label>
            <Input
              {...form.register("password")}
              className="w-full"
              placeholder="Enter your password"
            />
            {form.formState.errors.password && (
              <p className="text-sm text-red-500">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="p-2 bg-red-900 cursor-pointer text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
