// =======================================================================
// FILE: /components/components_user/uploadJournal.tsx (Updated)
// =======================================================================
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  Input,
  Select,
  SelectItem,
  Button
} from "@heroui/react";
import TiptapEditor from "../tiptapEditor"; // Import the new Tiptap editor

export default function UploadJournal() {
  return (
    <section className="bg-white shadow-md rounded-lg p-5 space-y-6">
        <h4 className="flex gap-3 text-dark-red text-2xl font-bold items-center">
          <FontAwesomeIcon icon={faFileArrowUp} />
          Upload Journal
        </h4>
        <div className="bg-gray-50 p-5 rounded-md border space-y-4">
          <h4 className="text-lg font-semibold text-gray-700">Workflow</h4>
          <Input isReadOnly label="Author" defaultValue="jamal@oplib - jamaluddin albaghdadi" />
          <Select label="Workflow" placeholder="Select your workflow">
            <SelectItem key="1">Workflow 1</SelectItem>
          </Select>
          <Select label="Library Type" placeholder="Select your library type">
            <SelectItem key="1">Type 1</SelectItem>
          </Select>
        </div>
        <div className="bg-gray-50 p-5 rounded-md border space-y-4">
          <h4 className="text-lg font-semibold text-gray-700">Document</h4>
            <Input label="Title" placeholder="Insert Your Book&apos;s Title" />
            <Select label="Subject" placeholder="Select your subject">
               <SelectItem key="1">Subject 1</SelectItem>
            </Select>
            <div>
                <label className="text-sm font-medium text-gray-700">Abstract</label>
                <div className="mt-2">
                    {/* Replace QuillTextEditor with the new TiptapEditor */}
                    <TiptapEditor />
                </div>
            </div>
            <Select label="Unit" placeholder="Select the unit">
               <SelectItem key="1">Unit 1</SelectItem>
            </Select>
            <Select label="Competence" placeholder="Select the competence">
               <SelectItem key="1">Competence 1</SelectItem>
            </Select>
        </div>
        <div className="flex justify-end">
            <Button color="primary" size="lg">Submit</Button>
        </div>
    </section>
  );
}
