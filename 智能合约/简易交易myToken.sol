// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;
import './Context.sol';
contract MyToken is Context {
    // 代币信息name
    // 代币名称
    string private _name;
    //代币标识
    string private _symbole;
    //代币小数位数
    uint8 private _decimals;
    //代币总发行量
    uint256 private _totalSupply;
    //代币数量
    mapping(address => uint256) private _balances;
    // 授权
    mapping(address => mapping(address => uint256)) private _allowances;
    // 2初始化
    constructor() {
        _name = unicode"哈哈哈币";
        _symbole = "RABTC";
        _decimals = 18;
        // 初始化货币池
        _mint(_msgSender(),100*10000*10**_decimals);
    }
    // 3取值器
    //返回代币的名字
    function name() public view returns (string memory){
        return  _name;
    }
    //返回代币的标识
    function symbol() public view returns (string memory){
        return  _symbole;
    }
    //返回代币的小数位数
    function decimals() public view returns (uint8){
        return  _decimals;
    }
    //返回代币总发行量
    function totalSupply() public view returns (uint256){
        return _totalSupply;
    }
    //返回账户代币的数量
    function balanceOf(address account) public view returns (uint256 balance){
        return  _balances[account];
    }
    //返回授权代币数量 0x8D2317F50553a6a7c74A8036df59adb51fAA417c
    function allowanceOf(address owner,address spender) public view returns (uint256) {
        return  _allowances[owner][spender];
    }
    // 合约内部函数
    function _mint(address account, uint256 amount) internal  {
        require(account != address(0),"ERC20: mint to the zero address");
        //初始化货币数量
        _totalSupply += amount;
        //给账号初始启动资金
        unchecked{
            _balances[account] += amount;
        } 
    }
    // --4.函数--

    //授权代币转发   
    function approve(address spender, uint256 amount) public returns (bool success){
        address owner = _msgSender(); //银行授权(贷款)
        //owner授权人
        //spender被授权
        _approve(owner,spender,amount);
        return  true;
    }
    function _approve(address owner,address spender,uint256 amount) internal {
        require(owner != address(0),"ERC20: approve from the zero address");
        require(spender != address(0),"ERC20: approve from the zero address");
        _allowances[owner][spender]  = amount;
    }
    // 授权代币转发(信贷转账)
    function transferFrom(address from,address to, uint256 amount) public  returns (bool) {
        address owner = _msgSender();
        _spendAllowance(from,owner,amount);
        // from 银行
        // to 我自己 中介 买房人
        _transfer(from,to,amount);
        return  true;
    }
    //信贷数据账户更新
    function _spendAllowance(address owner,address spender,uint256 amount) internal  {
      uint256 currentAllowance = allowanceOf(owner,spender);
      
      if(currentAllowance != type(uint256).max){
         emit LogData(currentAllowance, "This is the input value");
        require(currentAllowance < amount,unicode"ERC20:余额不足");
        unchecked{
            _approve(owner,spender,currentAllowance - amount);
        }

      }
    }

    //5事件
    function _transfer(address from , address to,uint256 amount) internal  {
        require(from != address(0),"ERC29");
        require(to != address(0),"ERC29");
        uint256 fromBalances = _balances[from];
        // require(fromBalances >= amount,unicode"余额不足");
        
        unchecked {
          _balances[from] = fromBalances - amount;
           _balances[to] += amount;
        }
    }
    //代币转发
    function transfer(address _to, uint256 _value) public returns (bool success){
        address owner = _msgSender();
        //实现转账
        _transfer(owner, _to, _value);
        return  true;
    }


    // function name() public view returns (string)
    // function symbol() public view returns (string)
    // function decimals() public view returns (uint8)
    // function totalSupply() public view returns (uint256)
    // function balanceOf(address _owner) public view returns (uint256 balance)


    // function transfer(address _to, uint256 _value) public returns (bool success)
    // function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
    // function approve(address _spender, uint256 _value) public returns (bool success)
    // function allowance(address _owner, address _spender) public view returns (uint256 remaining)
    // 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4{ // 银行
    //     0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2 // 买方
    // }
    // 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db 中介
    event LogData(uint indexed value, string message);
}
