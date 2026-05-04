import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";
import type { ProductType } from "./Product";

function PageDeferred() {
  const {events} = useLoaderData();
  return (
    <div>
        <h1>Here we go</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={events}>
            { (receivedData: ProductType[]) => (
                <ul>
                    {receivedData.map((event) => (
                        <li key={event.id}>
                            <img src={event.url} width={250} height={150} alt="" />
                        </li>
                    ))}
                </ul>
            )}
        </Await>
      </Suspense>
    </div>
  );
};

export default PageDeferred;