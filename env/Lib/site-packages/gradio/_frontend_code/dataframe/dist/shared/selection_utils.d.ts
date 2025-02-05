export type CellCoordinate = [number, number];
export type CellData = {
    id: string;
    value: string | number;
};
export type EditingState = false | CellCoordinate;
export declare function is_cell_selected(cell: CellCoordinate, selected_cells: CellCoordinate[]): string;
export declare function get_range_selection(start: CellCoordinate, end: CellCoordinate): CellCoordinate[];
export declare function handle_selection(current: CellCoordinate, selected_cells: CellCoordinate[], event: {
    shiftKey: boolean;
    metaKey: boolean;
    ctrlKey: boolean;
}): CellCoordinate[];
export declare function handle_delete_key(data: CellData[][], selected_cells: CellCoordinate[]): CellData[][];
export declare function handle_editing_state(current: CellCoordinate, editing: EditingState, selected_cells: CellCoordinate[], editable: boolean): EditingState;
export declare function should_show_cell_menu(cell: CellCoordinate, selected_cells: CellCoordinate[], editable: boolean): boolean;
export declare function get_next_cell_coordinates(current: CellCoordinate, data: CellData[][], shift_key: boolean): CellCoordinate | false;
export declare function move_cursor(key: "ArrowRight" | "ArrowLeft" | "ArrowDown" | "ArrowUp", current_coords: CellCoordinate, data: CellData[][]): CellCoordinate | false;
export declare function get_current_indices(id: string, data: CellData[][]): [number, number];
export declare function handle_click_outside(event: Event, parent: HTMLElement): boolean;
