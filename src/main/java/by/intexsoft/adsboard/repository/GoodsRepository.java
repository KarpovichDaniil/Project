package by.intexsoft.adsboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import by.intexsoft.adsboard.model.Goods;

/**
 * ��������� ��� ��������� CRUD �������� ����������� ���� {@link Goods}
 */
@Repository
public interface GoodsRepository extends JpaRepository<Goods, Long>{

}
