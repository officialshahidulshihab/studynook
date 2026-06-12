"use client";
import { Label, Select, ListBox } from "@heroui/react";
import { CiClock2 } from "react-icons/ci";

const HOURS = Array.from({ length: 13 }, (_, i) => i + 8); // 8..20

const Time = ({ startTime, endTime, onStartChange, onEndChange }) => {
  const endOptions = HOURS.filter((h) => startTime !== null && h > startTime);

  return (
    <div className="mt-1 space-y-1">
      <Select
        className="w-full"
        selectedKey={startTime !== null ? startTime.toString() : null}
        onSelectionChange={(key) => {
          onStartChange(Number(key));
          onEndChange(null);
        }}
      >
        <Label className="text-[#527c74] flex items-center gap-2">
          <CiClock2 className="text-[#c9a84c]" />
          START TIME
        </Label>
        <Select.Trigger className="bg-[#1f3530] text-[#c9a84c]">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {HOURS.map((h) => (
              <ListBox.Item key={h} id={h.toString()} textValue={`${String(h).padStart(2, "0")}:00`}>
                {String(h).padStart(2, "0")}:00
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>

      <Select
        className="w-full"
        selectedKey={endTime !== null ? endTime.toString() : null}
        onSelectionChange={(key) => onEndChange(Number(key))}
        isDisabled={startTime === null}
      >
        <Label className="text-[#527c74] flex items-center gap-2">
          <CiClock2 className="text-[#c9a84c]" />
          END TIME
        </Label>
        <Select.Trigger className="bg-[#1f3530] text-[#c9a84c]">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {endOptions.map((h) => (
              <ListBox.Item key={h} id={h.toString()} textValue={`${String(h).padStart(2, "0")}:00`}>
                {String(h).padStart(2, "0")}:00
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default Time;