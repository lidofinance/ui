import { ComponentPropsWithoutRef, MouseEvent, ReactNode, useEffect, useState } from "react";
import styles from "./tabs.module.css";
import cn from "classnames";

export type TabBaseItem = {
  key: string;
  disabled?: boolean;
  children?: ReactNode;
};

export type TabIconItem = TabBaseItem & {
  rightDecorator?: never;
};

export type TabButtonItem = TabBaseItem & {
  rightDecorator?: ReactNode;
};

export type TabsBaseProps = Omit<ComponentPropsWithoutRef<"div">, "onChange"> & {
  size?: "m" | "l" | "xl";
  defaultKey?: string;
  activeKey?: string;
  onKeyChange?: (key: string) => unknown;
};

export type TabsButtonProps = TabsBaseProps & {
  type?: "buttons";
  items?: TabButtonItem[];
};

export type TabsIconProps = TabsBaseProps & {
  type?: "icons";
  items?: TabIconItem[];
};

export type TabsProps = TabsButtonProps | TabsIconProps;

export const Tabs = ({
  type = "buttons",
  size = "m",
  defaultKey,
  activeKey: _activeKey,
  items,
  onKeyChange,
  className,
  ...rest
}: TabsProps) => {
  const [activeKey, setActiveKey] = useState<string | number | undefined>(undefined);

  useEffect(() => {
    setActiveKey(defaultKey);
  }, [defaultKey]);

  useEffect(() => {
    if (_activeKey != null) {
      setActiveKey(_activeKey);
    } else {
      const firstItem = items?.[0];
      if (firstItem == null) {
        return;
      }
      setActiveKey(firstItem.key);
    }
  }, [_activeKey, items]);

  const handleClick = (key: string) => (event: MouseEvent) => {
    event.preventDefault();
    onKeyChange?.(key);
    if (_activeKey != null) {
      return;
    }
    setActiveKey(key);
  };

  return (
    <div className={cn(styles.tabs, className)} data-testid="tabs" {...rest}>
      {items?.map((item) => (
        <button
          data-id={item.key === activeKey ? "active" : undefined}
          data-testid="tabs__tab"
          className={cn(styles.tab, {
            [styles.active]: item.key === activeKey,
            [styles.button]: type === "buttons",
            [styles.icon]: type === "icons",
            [styles.sizeM]: size === "m",
            [styles.sizeL]: size === "l",
            [styles.sizeXL]: size === "xl",
          })}
          key={item.key}
          disabled={item.disabled}
          onClick={handleClick(item.key)}
        >
          <span data-testid="tab_title">{item.children}</span>
          {item.rightDecorator != null && <span className={styles.rightDecorator}>{item.rightDecorator}</span>}
        </button>
      ))}
    </div>
  );
};
