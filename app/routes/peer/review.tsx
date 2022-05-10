import { Form } from "@remix-run/react";
import React from "react";

export default function Review() {

  const [numStars, setNumStars] = React.useState(0)

  return (
    <div className="d-flex p-4">
        <div>hi its the review screen</div>
        <div>You and Camille have worked more thant 50 hours together during this last period. Please carefully and honestly review Camille since it may have an impact on her position.</div>
        <Form action="/peer/success">
            <div className="d-flex">
                <span onClick={() => setNumStars(1)}>{numStars >= 1 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(2)}>{numStars >= 2 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(3)}>{numStars >= 3 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(4)}>{numStars >= 4 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(5)}>{numStars >= 5 ? "⭐️" : "✩" }</span>
                <span className="px-2">Good team work</span>
                <label className="flex w-full flex-col gap-1">
                    <span>Body: </span>
                    <textarea
                        ref={bodyRef}
                        name="body"
                        rows={8}
                        className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
                        aria-invalid={actionData?.errors?.body ? true : undefined}
                        aria-errormessage={
                        actionData?.errors?.body ? "body-error" : undefined
                        }
                    />
                    </label>
            </div>

            <div className="d-flex">
                <span onClick={() => setNumStars(1)}>{numStars >= 1 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(2)}>{numStars >= 2 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(3)}>{numStars >= 3 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(4)}>{numStars >= 4 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(5)}>{numStars >= 5 ? "⭐️" : "✩" }</span>
                <span className="px-2">Good client contact</span>
            </div>

            <div className="d-flex">
                <span onClick={() => setNumStars(1)}>{numStars >= 1 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(2)}>{numStars >= 2 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(3)}>{numStars >= 3 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(4)}>{numStars >= 4 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars(5)}>{numStars >= 5 ? "⭐️" : "✩" }</span>
                <span className="px-2">Reliability</span>
            </div>
            
            <button
                type="submit"
                className="rounded bg-slate-600 my-4 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
            >
                Submit
        </button>
        </Form>
      </div>
    )
}