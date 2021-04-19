pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "./ERC20.sol";
import "./TonUtils.sol";


abstract contract WrappedTON is ERC20, TonUtils {

    function mint(SwapData memory sd) internal {
      _mint(sd.receiver, sd.amount);
      emit SwapTONToEth(sd.tx.address_.workchain, sd.tx.address_.address_hash, sd.tx.tx_hash, sd.tx.lt, sd.receiver, sd.amount);
    }

    /**
     * @dev Destroys `amount` tokens from the caller and request transfer to `addr` on TON network
     *
     * See {ERC20-_burn}.
     */
    function burn(uint256 amount, TonAddress memory addr) external {
      _burn(msg.sender, amount);
      emit SwapEthToTON(msg.sender, addr, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, deducting from the caller's
     * allowance and request transder to `addr`
     *
     * See {ERC20-_burn} and {ERC20-allowance}.
     *
     * Requirements:
     *
     * - the caller must have allowance for ``accounts``'s tokens of at least
     * `amount`.
     */
    function burnFrom(address account, uint256 amount, TonAddress memory addr) external {
        decreaseAllowance(account, amount);
        _burn(account, amount);
        emit SwapEthToTON(account, addr, amount);
    }

    event SwapEthToTON(address indexed from, TonAddress indexed to, uint256 value);
    event SwapTONToEth(int8 workchain, bytes32 indexed ton_address_hash, bytes32 indexed ton_tx_hash, uint64 lt, address indexed to, uint256 value);
}