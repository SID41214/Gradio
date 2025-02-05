import type { HeadersWithIDs } from "./utils";
import type { CellCoordinate } from "./selection_utils";
export type TableData = {
    value: string | number;
    id: string;
}[][];
export declare function get_max(_d: TableData): TableData[0];
export declare function guess_delimiter(text: string, possibleDelimiters: string[]): string[];
export declare function data_uri_to_blob(data_uri: string): Blob;
export declare function copy_table_data(data: TableData, headers?: HeadersWithIDs, selected_cells?: CellCoordinate[]): Promise<void>;
export declare function blob_to_string(blob: Blob, col_count: [number, "fixed" | "dynamic"], make_headers: (head: string[]) => HeadersWithIDs, set_values: (values: (string | number)[][]) => void): void;
export declare function handle_file_upload(data_uri: string, col_count: [number, "fixed" | "dynamic"], make_headers: (head: string[]) => HeadersWithIDs, set_values: (values: (string | number)[][]) => void): void;
