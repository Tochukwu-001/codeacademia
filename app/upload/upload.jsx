"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function UploadClient() {
    return (
        <main className="min-h-dvh">
            <Formik>
                <Form>
                    <div>
                        <label htmlFor="">Title</label>
                        <Field/>
                    </div>
                </Form>               
            </Formik>
        </main>
    )
}
