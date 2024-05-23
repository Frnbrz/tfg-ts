import { code } from "@/assets"
import Section from "@/components/Section"

function SignUp() {
  return (
    <Section className="overflow-hidden flex justify-center items-center h-[90%]" id="login" crosses crossesOffset='lg:translate-y-[5.25rem] '
    >

      <div className="grid gap-2 w-10/12 min-h-[80%] grid-cols-1 lg:grid-cols-2 border border-n-4
     rounded-2xl">
        <div className=" rounded-l-2xl flex  items-center justify-center bg-gray-100 px-4 py-12 dark:bg-n-8 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">

                Crear cuenta
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Please sign in to your account</p>
            </div>
            <form action="#" className="space-y-4" method="POST">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="email"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                    id="email"
                    name="email"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="current-password"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                    id="password"
                    name="password"
                    required
                    type="password"
                  />
                </div>
              </div>
              <div>
                <button
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-n-2">
              ¿Ya tienes una cuenta?
              <a href="/login" className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Inicia sesión
              </a>
            </p>
          </div>

        </div>
        <div className="hidden lg:block">
          <img
            alt="Login image"
            className="h-full w-full object-cover rounded-r-2xl"
            height="800"
            src={code}
            style={{
              aspectRatio: "1200/800",
              objectFit: "cover",
            }}
            width="1200"
          />
        </div>


      </div>
    </Section>
  )
}
export default SignUp