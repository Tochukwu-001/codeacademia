"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaRegPaperPlane } from "react-icons/fa";
import * as Yup from 'yup';


export default function UploadClient({ session }) {

    const author = session.user.name
    const authorImg = session.user.image
    const timestamp = new Date().toLocaleDateString()

    const initVal = {
        title: "",
        language: "",
        description: "",
        snippet: "",
        youtube: ""
    }

    const formValidation = Yup.object({
        title: Yup.string().min(5, "Minimum of 5 characters").required("This is a required field"),
        language: Yup.string().required("This is a required field"),
        description: Yup.string().required("This is a required field").min(10, "Mininum of 10 characters"),
        snippet: Yup.string().required("This is a required field"),
        youtube: Yup.string()
    })

    return (
        <main className="min-h-dvh p-3">
            <h1 className='text-center md:text-3xl lg:w-1/2 mx-auto font-semibold my-10'>Fill this form to contribute to our ever-growing community of tech lovers</h1>
            <Formik
                initialValues={initVal}
                validationSchema={formValidation}
                onSubmit={(values) => console.log(author, authorImg, timestamp, values)}
            >
                <Form className='border border-gray-200 lg:w-1/2 mx-auto p-3 rounded-md shadow-md flex flex-col gap-5'>
                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700' htmlFor="">Title</label>
                        <Field
                            className="w-full outline-none border border-gray-200 px-3 py-2 rounded-md" placeholder="Enter a title..."
                            name="title"
                        />
                        <ErrorMessage component={"p"} className='text-xs text-red-600' name='title' />
                    </div>

                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700' htmlFor="">Programming Language</label>
                        <Field
                            className="w-full outline-none border border-gray-200 px-3 py-2 rounded-md" placeholder="Select a language"
                            name="language"
                        />
                        <ErrorMessage component={"p"} className='text-xs text-red-600' name='language' />
                    </div>

                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700' htmlFor="">Description</label>
                        <Field
                            className="w-full outline-none border border-gray-200 px-3 py-2 rounded-md" placeholder="Provide a brief description..."
                            name="description"
                        />
                        <ErrorMessage component={"p"} className='text-xs text-red-600' name='description' />
                    </div>

                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700' htmlFor="">Code Snippet</label>
                        <Field
                            className="w-full outline-none border border-gray-200 px-3 py-2 rounded-md" placeholder="Write your code..."
                            name="snippet"
                        />
                        <ErrorMessage component={"p"} className='text-xs text-red-600' name='snippet' />
                    </div>

                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700' htmlFor="">Youtube Link (optional)</label>
                        <Field
                            className="w-full outline-none border border-gray-200 px-3 py-2 rounded-md" placeholder="Link to your YouTube channel..."
                            name="youtube"
                        />
                        <ErrorMessage component={"p"} className='text-xs text-red-600' name='youtube' />
                    </div>

                    <button type='submit' className='bg-purple-600 text-white px-6 py-2 rounded-md max-md:w-full w-fit text-xl uppercase'>
                        <span className='flex items-center justify-center gap-2'>
                            Post
                            <FaRegPaperPlane />
                        </span>
                    </button>
                </Form>
            </Formik>
        </main>
    )
}
