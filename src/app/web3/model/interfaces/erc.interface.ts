export interface IERC {
  /**
   * @returns Returns TRUE if the current interface is
   * compatible with the erc number passed as parameter
   */
  isERC(erc: number): boolean;
}
