import { SVGAttributes } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <div
        >
            <img
                width={70}
                height={70}
                src="http://localhost/images/logo.png"
                alt="image 1"
                className=""
            />
        </div>
    );
}
