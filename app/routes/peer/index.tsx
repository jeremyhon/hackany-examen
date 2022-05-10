import { Form } from "@remix-run/react";

export default function Prompt() {
    return (
      <div className="d-flex p-4">
        <div>Do you want to review Camille ?</div>
        <Form action="/peer/review">
          <button
            type="submit"
            className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
          >
            Review now
          </button>
        </Form>
      </div>
      
    )
}