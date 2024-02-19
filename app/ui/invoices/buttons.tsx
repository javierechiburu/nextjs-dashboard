import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg border border-yellow-600 bg-gray-900 px-4 text-sm font-medium text-gray-200 transition-colors hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4 hover:text-yellow-400" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href="/dashboard/invoices"
      className="rounded-md border p-2 hover:border-yellow-400"
    >
      <PencilIcon className="w-5 hover:text-yellow-400" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-md border p-2 hover:border-yellow-400">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 hover:text-yellow-400" />
      </button>
    </>
  );
}
