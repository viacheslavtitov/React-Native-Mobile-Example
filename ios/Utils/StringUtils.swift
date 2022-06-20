//
//  StringUtils.swift
//  ReactNativeMobileExample
//
//  Created by Viacheslav Titov on 11.05.2022.
//

import Foundation

@objc public class StringUtils: NSObject {
  @objc
  public func handleInputData(income: String) -> String {
    let randomInt = Int.random(in: 1...10)
    return income + " from native IOS Swift code: \(randomInt)"
  }
}
