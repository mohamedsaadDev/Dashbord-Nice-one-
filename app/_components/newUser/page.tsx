import React from 'react'
import { useAppContext } from "../../_context/index";
import Link from "next/link";
import { UserType} from "../../../type/type";
function NewUser () {
    const { Users } = useAppContext();
    const newUser = Users.slice(0, 3);
    return (
        <div className="max-w-sm ml-2 bg-white border border-gray-200 rounded-lg shadow sm:py-5 sm:px-5 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-1">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                New User
            </h5>
            <Link
                className="text-sm font-medium text-purple-700 hover:text-purple-500 mt-1 ml-2 "
                href="/users"
            >
                View all
            </Link>
            </div>
            <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 ">
                {newUser.map((user:UserType, index: number) => (
                <li className="py-1 sm:py-4" key={index}>
                    <div className="flex items-center">
                    <div className="flex-shrink-0">Name : {user.firstName}</div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 overflow-hidden whitespace-nowrap">
                            Email : {user.email}
                        </p>
                    </div>
                    </div>
                </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default NewUser