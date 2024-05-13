import React from 'react'

export default function Footer(props) {
    return (
        <div className='fixed-bottom'>
            <footer className="bg-body-tertiary text-center text-lg-start">

                <div className="text-center p-3">
                    © {props.year} Copyright:
                    <a className="text-body" href="https://mdbootstrap.com/">{props.link}</a>
                </div>

            </footer>

        </div>
    )
}
