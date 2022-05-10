import { Form } from "@remix-run/react";
import karlPic from './karl-pic.jpg';

export default function Prompt() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <img
          style={{
            width: "50%",
            height: "80%",
            borderRadius: "10px",
          }}
            src= {karlPic}
            alt="Sonic Youth On Stage"
          />
        <div>Do you want to review Karl ?</div>
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