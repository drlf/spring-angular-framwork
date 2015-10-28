package cn.ilongfei.springbootbasic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cn.ilongfei.springbootbasic.domain.Setting;

public interface SettingRepository extends JpaRepository<Setting, Long> {
	
}
