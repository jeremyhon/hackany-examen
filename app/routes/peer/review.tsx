import { Form } from "@remix-run/react";
import React from "react";

export default function Review() {

  const [numStars1, setNumStars1] = React.useState(0)
  const [numStars2, setNumStars2] = React.useState(0)
  const [numStars3, setNumStars3] = React.useState(0)

  return (
    <div className="d-flex p-4">
        <div>hi its the review screen</div>
        <div>You and Karl have worked more thant 50 hours together during this last period. Please carefully and honestly review Camille since it may have an impact on her position.</div>
        <Form action="/peer/success">
            <div className="d-flex">
                <span onClick={() => setNumStars1(1)}>{numStars1 >= 1 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars1(2)}>{numStars1 >= 2 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars1(3)}>{numStars1 >= 3 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars1(4)}>{numStars1 >= 4 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars1(5)}>{numStars1 >= 5 ? "⭐️" : "✩" }</span>
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
                <span onClick={() => setNumStars2(1)}>{numStars2 >= 1 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars2(2)}>{numStars2 >= 2 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars2(3)}>{numStars2 >= 3 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars2(4)}>{numStars2 >= 4 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars2(5)}>{numStars2 >= 5 ? "⭐️" : "✩" }</span>
                <span className="px-2">Good client contact</span>
            </div>

            <div className="d-flex">
                <span onClick={() => setNumStars3(1)}>{numStars3 >= 1 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars3(2)}>{numStars3 >= 2 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars3(3)}>{numStars3 >= 3 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars3(4)}>{numStars3 >= 4 ? "⭐️" : "✩" }</span>
                <span onClick={() => setNumStars3(5)}>{numStars3 >= 5 ? "⭐️" : "✩" }</span>
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